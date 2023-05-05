<?php

namespace App\Http\Controllers;

use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        $uploadedFiles = [];

        // check if the request contains any files
        if ($request->hasFile('files')) {

            // get the order ID from the request
            $orderId = $request->input('order_id');

            // create a directory for the order if it doesn't exist
            if (!Storage::exists("uploads/{$orderId}")) {
                Storage::makeDirectory("uploads/{$orderId}");
            }

            // loop through each file in the request
            foreach ($request->file('files') as $file) {

                // generate a unique file name
                $name = $file->getClientOriginalName();

                // store the file in the order directory with the unique name
                $path = $file->storeAs("uploads/{$orderId}", $name);

                // add the path of the uploaded file to the array
                array_push($uploadedFiles, $path);
            }

            // return a success response with the uploaded file paths
            return response()->json([
                'success' => true,
                'uploaded_files' => $uploadedFiles
            ]);
        }

        // return an error response if no files were uploaded
        return response()->json([
            'success' => false,
            'message' => 'No files were uploaded.'
        ]);
    }


    public function send_attach_email()
    {
        $mailData = [
            'title' => 'confirmation email',
            'body' => 'Hello Aymane, Thank you for your order.'
        ];
        Mail::to('Aymecd123@gmail.com')->send(new SendEmail($mailData));

        echo "email sent";
    }

    public function send_form(Request $request)
    {
        if ($request) {

            return response()->json(['success' => 'File uploaded successfully', 'values' => $request->payload]);
        }
        return response()->json("Please try again...!");
    }
}