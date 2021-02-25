<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FlightApiController extends Controller
{
    public function getData($flightNumber){
       $flightData =  Http::get("http://api.aviationstack.com/v1/flights?access_key=33b5f05ab390e45eabacbb1fb00e8b5c&flight_iata=$flightNumber")->json();

       return response()->json(["flightData" => $flightData]);
    }
}
