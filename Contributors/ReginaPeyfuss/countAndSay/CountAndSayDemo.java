class CountAndSayDemo {
    public static void main(String[] args){
        CountAndSay demo = new CountAndSay();
        System.out.println(demo.countAndSay(1)); //output 1
        System.out.println(demo.countAndSay(2)); //output 11
        System.out.println(demo.countAndSay(3)); //output 21
        System.out.println(demo.countAndSay(4)); //output 1211
        System.out.println(demo.countAndSay(5)); //output 111221
    }
}