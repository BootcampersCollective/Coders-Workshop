function once(myFunc){

	// closure (state)
	let called = false;

	return function() {
		// do stuff
		if (!called) {
			called = true;
			return myFunc();
		}
	}
    
}

const onlyCallOnce = once(() => console.log('hi'))

onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();
onlyCallOnce();


