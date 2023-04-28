<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
