<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $req)
    {
        $validatedData = $req->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'phone_number' => 'required',
            'city' => 'required',
            'zipCode' => 'required',
            'AddressLineOne' => 'required',
            'AddressLineTwo' => 'nullable',
        ]);

        User::create([
            'fname' => $validatedData['firstName'],
            'lname' => $validatedData['lastName'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'phone' => $validatedData['phone_number'],
            'city' => $validatedData['city'],
            'zip' => $validatedData['zipCode'],
            'remember_token' => Str::random(20),
            'address' => $validatedData['AddressLineOne'] . ($validatedData['AddressLineTwo'] ? " , " . $validatedData['AddressLineTwo'] : ""),
        ]);

        return response()->json(['success' => 'New User Created Successfully.']);
    }


    public function login()
    {
        $data = request()->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (auth()->attempt($data)) {
            $user = auth()->user();
            return response()->json(['loggedIn' => $user]);
        }

        return response()->json("Email ou Mot de passe incorrect.");
    }
}
