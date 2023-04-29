<?php

namespace App\Http\Controllers;

use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class UploadController extends Controller
{
    public function store(Request $request)
  {
    if ($request->has('fileAtt')){
      $file = $request->file('fileAtt');
      $name = Time().".".$file->getClientOriginalExtension();
      $file->move('uploads', $name);
      return response()->json(['success' => 'File uploaded successfully']);
    }
    return response()->json("Please try again...!");
  }

  public function send_attach_email (){
    $mailData = [
      'title'=>'confirmation email',
      'body'=>'hello Aymane, Thank you for your order.'
    ];
    Mail::to('Aymecd123@gmail.com')->send(new SendEmail($mailData));

    echo "email sent";
  }









  public function send_form (Request $request)
  {
    if ($request){

      return response()->json(['success' => 'File uploaded successfully', 'values' => $request->payload]);
    }
    return response()->json("Please try again...!");
  }



}
