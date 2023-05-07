<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $Order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($Order)
    {
        $this->Order = $Order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $Order = $this->Order;

        $mail = $this->view('emails.orderConfirmation')
            ->with(['Order' => $Order])
            ->subject('Order Confirmation - ' . $this->Order['Order ID']);

        // Attach files
        foreach ($Order['Files'][0] as $file) {
            $mail->attach(storage_path('app/' . $file), [
                'as' => $file,
            ]);
        }

        return $mail;
    }
}