package com.xjt.testPlugin;

import android.content.Intent;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class testPlugin extends CordovaPlugin {

    private static int LOGIN_CODE = 0x01;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        LOG.i("testPlugin","testPlugin............."+action);
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }else if(action.equals("openPage")){
            Intent intent = new Intent(cordova.getActivity(), com.xjt.testPlugin.LoginActivity.class);
            cordova.startActivityForResult(this,intent,LOGIN_CODE);
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
