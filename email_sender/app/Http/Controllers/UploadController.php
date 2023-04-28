<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function store(Request $request)
  {
    $file = $request->file('file');
    $file->store('uploads');
    return response()->json(['message' => 'File uploaded successfully']);
  }
}
