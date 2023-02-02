# How would you design the control system for an elevator?

I want to break out into components

Central Control
	all components connect to central control separately
	priority queue
	who's pressing the buttons first
	first press first serve
    override

Button Panel

Pulley engine
    emergency stop function
	* if pulley engine fails, needs to handle the failure gracefully
Floor display

Door

Communication:
	Each component broadcasts an event with a timestamp to central control
	Central control decides what to do about it

Safety
	Each component will implement its own safety mechanisms
