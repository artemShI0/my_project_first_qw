function check_place(iskom, myWarient) {
  let place = 0;
  for (let i = 0; i < iskom.length; i++) {
    if (iskom[i] == myWarient[i]) {
      place++;
    }
  }
  return place;
}

function check_have(iskom, myWarient) {
  let have = 0;
  for (let i = 0; i < iskom.length; i++) {
    for (let j = 0; j < iskom.length; j++) {
      if (myWarient[i] == iskom[j]) {
        have++;
      }
    }
  }
  return have;
}

function output(have, place, myWarient) {
  console.log(myWarient, "     ? x", have, "    * x", place);
}



function win(){
  console.log("           .....................................                          ")
  console.log("           :@%*********************************#@=                         ")
  console.log(" .+********#@+                                 -@%********+:               ")
  console.log(".@+::::::::=@*                                 =@+::::::::-@=              ")
  console.log(" .@# .@#    @%                                 *@.   =@= =@:               ")
  console.log("  =@= :@=   *@.                                %%   .@* :@*                ")
  console.log("   #@. =@:  .@=                               :@-   %#  %%                 ")
  console.log("       :%*: =%*#@-                         :@#*%+..+%-                     ")
  console.log("         +@+. -%@@=                       -@@%+  =@+.                      ")
  console.log("             -#%+::##:                 .*%-:+##=.                          ")
  console.log("                -*%%@@*.              +@@%@#-.                             ")
  console.log("                   .=+#@=           =%#+=.                                 ")
  console.log("                       :#@+++++++++%%-                                     ")
  console.log("                       +@=.........-@*                                     ")
  console.log("                        :@%*******#@=                                      ")
  console.log("                      .%%.          #@:                                    ")
  console.log("                    .+@%=+*#######*+=*@*:                                  ")
  console.log("                :#@+:                   .+%%-                              ")
  console.log("              :#%-                         :#%-                            ")
  console.log("             %*                               +@.                          ")
  console.log("             *##################################:                          ")
}

