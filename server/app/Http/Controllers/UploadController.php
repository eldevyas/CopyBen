<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmation;
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

    public function handleOrder(Request $request)
    {
        // Get the order information from the request
        $OrderID = $request->input('orderID');
        $UserInfo = $request->input('userInfo');
        $ProductName = $request->input('Product');
        $Customization = $request->input('Customization');
        $Files = $request->input('Files');

        // Generate the customization list
        $CustomizationList = array();
        foreach ($Customization['Customization'] as $key => $value) {
            $CustomizationItem = [
                'Name' => $key,
                'Value' => $value,
            ];
            array_push($CustomizationList, $CustomizationItem);
        }

        // Create the order details object
        $OrderDetails = [
            "Quantity" => $Customization['Quantity'],
            "Conception" => $Customization["Conception"],
            "Customization" => $CustomizationList,
            "Notes" => $Customization["Notes"],
            "Unit Price" => $Customization["Unit Price"],
            "Total HT" => $Customization["Total HT"],
        ];

        $Order = ["Order ID" => $OrderID, "User Information" => $UserInfo, "Product Name" => $ProductName, "Order Details" => $OrderDetails, "Files" => $Files];

        // Send the email to the owner
        Mail::to('yassinechettouch@gmail.com')->send(new OrderConfirmation($Order));

        // Return a response indicating success
        return response()->json(['success' => true, "OrderConfirmation" => ["Order ID" => $OrderID, "User Information" => $UserInfo, "Product Name" => $ProductName, "Order Details" => $OrderDetails, "Files" => $Files]]);
    }
}