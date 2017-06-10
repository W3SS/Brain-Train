package tk.salvador_nico.braintrain

import android.os.Bundle
import android.support.v7.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

//    -- setTimeout equivalent in Java --
//    new android.os.Handler().postDelayed(
//      new Runnable() {
//          public void run() {
//              Log.i("tag", "This'll run 300 milliseconds later");
//          }
//      },
//    300);

}
