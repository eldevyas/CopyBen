<?php

namespace App\Http\Controllers;

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
    $data = array('name'=>'Youssef');
    Mail::send('mail', $data, function ($message) {
        $message->from('elainouni.ysf@gmail.com', 'Copyben');
        $message->sender('elainouni.ysf@gmail.com', 'Copyben Director');
        $message->to('ysf.2015.el@gmail.com', 'Youssef');
        $message->replyTo('elainouni.ysf@gmail.com', 'contact me');
        $message->subject('Commande');
        $message->attach('public/uploads/1682728619.jpg');
    });

    echo "email sent";
  }













}
