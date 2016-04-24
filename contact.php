<?php

    if(empty($_POST) || !isset($_POST)) {

        ajaxResponse('error', 'Post cannot be empty.');

    } else {

        $postData = $_POST;
        $dataString = implode($postData,",");

        $mailgun = sendMailgun($postData);

        if($mailgun) {

            ajaxResponse('success', 'Great success.', $postData, $mailgun);

        } else {

            ajaxResponse('error', 'Mailgun did not connect properly.', $postData, $mailgun);

        }

    }

    function ajaxResponse($status, $message, $data = NULL, $mg = NULL) {
        $response = array (
            'status' => $status,
            'message' => $message,
            'data' => $data,
            'mailgun' => $mg
        );
        $output = json_encode($response);
        exit($output);
    }

    function sendMailgun($data) {

        $api_key = 'key-ce102d6acbc1cd2efe09a0b186c34a61';
        $api_domain = 'shaunrainer.com';
        $send_to = 'shaun@shaunrainer.com';

        $name = $data['name'];
        $email = $data['email'];
        $content = $data['message'];

        $messageBody = "Contact: $name ($email)\n\nMessage: $content";

        $config = array();
        $config['api_key'] = $api_key;
        $config['api_url'] = 'https://api.mailgun.net/v2/'.$api_domain.'/messages';

        $message = array();
        $message['from'] = $email;
        $message['to'] = $send_to;
        $message['h:Reply-To'] = $email;
        $message['subject'] = "Contact from ShaunRainer.com";
        $message['text'] = $messageBody;

        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $config['api_url']);
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($curl, CURLOPT_USERPWD, "api:{$config['api_key']}");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS,$message);

        $result = curl_exec($curl);

        curl_close($curl);
        return $result;

    }

?>