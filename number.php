
<?php

    /*  take 6 random numbers,
        just one triple consist of the same number (%25 possibility)
        or,
        take 6 random numbers,
        at most the same number exists two times
    */
    $chance=rand(1,100);
    $occoNumbers= array_fill(0, 10, 0);
    $reqNumber=6;
    $winNumber=-1;
    if($chance<=100)
    {
        $reqNumber=3;
        $winNumber=rand(0,9);
        $occoNumbers[$winNumber]=3;
    }
    
    while($reqNumber!=0)
    {
        $temp=-1;
        while($temp==-1||$temp==$winNumber)
        $temp=rand(0,9);
        if($occoNumbers[$temp]+1<3)
        {
            $occoNumbers[$temp]++;
            $reqNumber--;
        }
    }
    $reqNumber=0;
    $numbers=[6];
    $index=0;
    while($index<10)
    {
        $temp=$occoNumbers[$index];
            while($temp>0)
            {
                $numbers[$reqNumber++]=$index;
                $temp--;
            }

        $index++;
    }
    // for user experience
    shuffle($numbers);
    
    $response->winNumber=$winNumber;    
    $response->numbers=$numbers;
    echo json_encode($response);



