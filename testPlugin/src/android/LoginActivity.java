package com.xjt.testPlugin;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import io.ionic.starter.R;

public class LoginActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    @Override
    public void onClick(View view) {
        this.finish();
    }
}
