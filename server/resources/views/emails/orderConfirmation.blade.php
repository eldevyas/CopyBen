<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Order Confirmation</title>
    <style>
        /* General styles */
        body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 28px;
            font-weight: bold;
            margin: 0 0 20px;
        }

        p {
            margin: 0 0 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        table tr:first-child {
            background-color: #f7f7f7;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul li {
            margin-bottom: 10px;
        }

        /* Media query for mobile devices */
        @media only screen and (max-width: 600px) {
            .container {
                max-width: 100%;
                padding: 10px;
            }
        }
    </style>
</head>

<body>
    <h1>Order Confirmation</h1>

    <p>Thank you for your order! Here is your confirmation:</p>

    <table>
        <tr>
            <td>Order ID:</td>
            <td>{{ $Order['Order ID'] }}</td>
        </tr>
        <tr>
            <td>User Information:</td>
            <td>Nom: {{ $Order['User Information']['fname'] }} {{ $Order['User Information']['lname']
                }}
                <br />
                Ville: {{ $Order['User Information']['city'] }}
                <br />
                Num: {{ $Order['User Information']['phone'] }}
                <br />
                Email: {{ $Order['User Information']['email'] }}
                <br />
                ZIP: {{ $Order['User Information']['zip'] }}
                <br />
                Adresse: {{ $Order['User Information']['address'] }}
            </td>
        </tr>
        <tr>
            <td>Product Name:</td>
            <td>{{ $Order['Product Name'] }}</td>
        </tr>
        <tr>
            <td>Order Details:</td>
            <td>
                <ul>
                    <li>Quantité: {{ $Order['Order Details']['Quantity'] }}</li>
                    <li>Conception: {{ $Order['Order Details']['Conception'] }}</li>
                    <li>
                        Personnalisation:
                        <ul>
                            @foreach ($Order['Order Details']['Customization'] as $customization)
                            <li>{{ $customization['Name'] }}: {{ $customization['Value'] }}</li>
                            @endforeach
                        </ul>
                    </li>
                    <li>Notes: {{ $Order['Order Details']['Notes'] }}</li>
                    <li>Prix ​​unitaire: {{ $Order['Order Details']['Unit Price'] }}</li>
                    <li>Total HT: {{ $Order['Order Details']['Total HT'] }}</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Fichiers:</td>
            <td>
                @foreach ($Order['Files'] as $file)
                <img src="{{ asset($file[0]) }}" alt="{{ $file[0] }}" width="200px">
                @endforeach
            </td>
        </tr>
    </table>
</body>

</html>