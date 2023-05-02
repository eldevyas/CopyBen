<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // $table->string('fname')->after('id')->nullable();
            // $table->string('lname')->after('fname')->nullable();
            $table->string('phone')->after('lname')->nullable();
            $table->string('city')->after('phone')->nullable();
            $table->string('zip')->after('city')->nullable();
            $table->string('address')->after('zip')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
