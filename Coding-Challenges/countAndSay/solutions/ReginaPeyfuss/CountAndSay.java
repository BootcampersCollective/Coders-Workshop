class CountAndSay {
    public String countAndSay(int n) {
        if (n < 1 || n > 30) return "";
        if (n == 1) return "1";
        if (n == 2) return "11";
        String str = "11";
        for (int i = 2; i < n; i++){
            String newStr = "";
            int p = 0;
            int count = 1;
            while(p < str.length()-1){
                if (str.charAt(p) != str.charAt(p+1)) {
                    newStr = newStr + count + str.charAt(p);
                    count = 1;
                    p++;
                } else if  (str.charAt(p) == str.charAt(p+1)){
                    count++;
                    p++;
                }

                if (p == str.length()-1){
                    if (str.charAt(p) == str.charAt(p-1))
                        newStr = newStr + count + str.charAt(p);
                    else {
                        newStr = newStr + "1" + str.charAt(p);
                    }
                }
            }
            str = newStr.toString();
            newStr = "";
        }
        return str;
    }
}