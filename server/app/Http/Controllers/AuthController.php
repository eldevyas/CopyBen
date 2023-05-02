<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Str;

class AuthController extends Controller
{
    public function register (Request $req){
        if ($req){
            $data = $req->createFromGlobals()->all();

            User::create([
                'fname'=>$data['firstName'],
                'lname'=>$data['lastName'],
                'email'=>$data['email'],
                'password'=>$data['password'],
                'phone'=>$data['phone_number'],
                'city'=>$data['city'],
                'zip'=>$data['zipCode'],
                'remember_token'=>Str::random(20),
                'address'=>$data['AddressLineOne']." , ".$data['AddressLineTwo'],
            ]);

            return response()->json(['success' => 'Data Sent successfully']);
          }
          return response()->json("Please try again...!");
    }

    public function login (Request $req){
        if ($req){
            $data = $req->createFromGlobals()->all();
            $loggedIn = User::where('email', $data['email'])->where('password', $data['password'])->get();

            if (count($loggedIn) > 0){
                return response()->json(['loggedIn' => $loggedIn]);
            }
        }

        return response()->json("Email ou Mot de passe incorrect...!");
    }
}
