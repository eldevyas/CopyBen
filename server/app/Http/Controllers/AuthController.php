<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'phone_number' => 'required',
            'city' => 'required',
            'zipCode' => 'required',
            'AddressLineOne' => 'required',
            'AddressLineTwo' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $user = User::create([
            'fname' => $request->input('firstName'),
            'lname' => $request->input('lastName'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'phone' => $request->input('phone_number'),
            'city' => $request->input('city'),
            'zip' => $request->input('zipCode'),
            'remember_token' => Str::random(20),
            'address' => $request->input('AddressLineOne') . ($request->input('AddressLineTwo') ? ", " . $request->input('AddressLineTwo') : ""),
        ]);

        return response()->json([
            'success' => 'New User Created Successfully.',
            'user' => $user,
        ]);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                'loggedIn' => true,
                'user' => $user,
            ]);
        }

        return response()->json([
            'error' => 'Invalid email or password.',
        ], 401);
    }
}
