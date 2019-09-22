package com.example.baarish;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;


import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    private TextView hum;
    private TextView rainn;
    private String userId;
    private Object String;
    private String op;
    private Long rvalue;
    private String humid;
    private ImageView img;
    private String mrefe;
    private RelativeLayout mah;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_main);
        hum = (TextView)findViewById(R.id.humidity);
        rainn = (TextView)findViewById(R.id.rainn);

        img = (ImageView)findViewById(R.id.img);
        mah = (RelativeLayout)findViewById(R.id.mah);
        DatabaseReference ref = FirebaseDatabase.getInstance().getReference().child("prediction").child("id01").child("output");
        ref.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                op = dataSnapshot.getValue(String.class);
                hum.setText(op);
                rainn.setVisibility(View.INVISIBLE);

                if(op.length() == 3) {
                    hum.setText("There is a high chance of rain soon... !!!");
                    img.setImageResource(getResources().getIdentifier("rain", "drawable", getPackageName()));

                }else {
                    hum.setText("Chances are quite less for rain. But always stay alert... ;)");
                    img.setImageResource(getResources().getIdentifier("nope", "drawable", getPackageName()));

                }

            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                hum.setText("good");
            }
        });

         DatabaseReference refrain = FirebaseDatabase.getInstance().getReference().child("DHT12").child("Rain");






        refrain.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {


                rvalue = dataSnapshot.getValue(Long.class);
                if(rvalue<500){
                    hum.setVisibility(View.INVISIBLE);
                    img.setVisibility(View.INVISIBLE);
                    rainn.setVisibility(View.VISIBLE);
                    rainn.setText("Be Carefull its raining outside..... ");
                }


            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                hum.setText("good");
            }
        });










    }


}
