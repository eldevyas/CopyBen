<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Nouvelle commande</title>
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

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        h1 {
            font-size: 28px;
            font-weight: bold;
            margin: 0 0 20px;
        }

        p {
            margin: 0 0 10px;
        }

        table td {
            border: 1px solid #ccc;
        }

        /* Rest of your styles */
        /* ... */
    </style>
</head>

<body style="font-family: Arial, sans-serif; font-size: 16px; margin: 0; padding: 0;">

    <h1>Nouvelle commande</h1>

    <p>Bonjour, vous avez reçu une nouvelle commande sur le site CopyBen, veuillez vérifier les informations ci-dessous.
    </p>


    <table style="border-collapse: collapse;">
        <tr>
            <td style="background-color: #ff9515; color: #fff; font-weight: bold; padding: 10px;">Identifiant de
                commande:</td>
            <td style="padding: 10px;">{{ $Order['Order ID'] }}</td>
        </tr>
        <tr>
            <td style="background-color: #ff9515; color: #fff; font-weight: bold; padding: 10px;">Informations sur
                l'utilisateur:</td>
            <td style="padding: 10px;">
                Nom complet: {{ $Order['User Information']['fname'] }} {{ $Order['User Information']['lname'] }}<br />
                Numéro de téléphone: {{ $Order['User Information']['phone'] }}<br />
                Ville: {{ $Order['User Information']['city'] }}<br />
                Email: {{ $Order['User Information']['email'] }}<br />
                ZIP: {{ $Order['User Information']['zip'] }}<br />
                Adresse: {{ $Order['User Information']['address'] }}
            </td>
        </tr>
        <tr>
            <td style="background-color: #ff9515; color: #fff; font-weight: bold; padding: 10px;">Nom du produit: </td>
            <td style="padding: 10px;">{{ $Order['Product Name'] }}</td>
        </tr>
        <tr>
            <td style="background-color: #ff9515; color: #fff; font-weight: bold; padding: 10px;">Détails de la
                commande: </td>
            <td style="padding: 10px;">
                <strong>Quantité:</strong> {{ $Order['Order Details']['Quantity'] }}<br />
                <strong>Conception:</strong> {{ $Order['Order Details']['Conception'] }}<br />
                <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                    <tr>
                        <th colspan="2" style="text-align: center; border: 1px solid #ccc; padding: 10px;">
                            <strong>Personnalisation:</strong>
                        </th>
                    </tr>
                    @foreach ($Order['Order Details']['Customization'] as $customization)
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;">
                            <strong>
                                {{ $customization['Name'] }}:
                            </strong>
                        </td>
                        <td style="padding: 10px; border: 1px solid #ccc;">
                            {{ $customization['Value'] }}
                        </td>
                    </tr>
                    @endforeach
                </table>
                <br />
                <strong>Notes:</strong> {{ $Order['Order Details']['Notes'] }}<br />
                <strong>Prix ​​unitaire:</strong> {{ $Order['Order Details']['Unit Price'] }}<br />
                <strong>Total HT:</strong> {{ $Order['Order Details']['Total HT'] }}<br />
            </td>
        </tr>
    </table>


    <!-- Section as a support contact -->
    <div style="margin-top: 20px; text-align: left;">
        <p style="margin-bottom: 10px;">Si vous avez des questions ou besoin d'une assistance supplémentaire, n'hésitez
            pas à me contacter.</p>
        <a href="https://www.linkedin.com/in/yassinechettouch/" target="_blank"
            style="font-weight: bold; background-color: #ff9515; color: #fff; display: inline-block; padding: 10px 20px; text-decoration: none;">Contacter
            le développeur</a>
    </div>


</body>

</html>