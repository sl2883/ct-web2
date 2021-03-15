'use strict'

const modeSwitch = document.querySelector('#modeSwitch');

modeSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

const upBtn = document.querySelector('#userProfileLogin');

upBtn.addEventListener('click', function() {
	console.log("update user profile clicked", Math.random());
	clevertap.onUserLogin.push({
		"Site": {
		  "Name": "SL Clevertap Web ",            // String
		  "Email": "sl.clevertap@gmail.com",         // Email address of the user
		  "Phone": "+14155551234",           // Phone (with the country code)
		  "Gender": "M",                     // Can be either M or F
		  "DOB": new Date(),                 // Date of Birth. Date object
	   // optional fields. controls whether the user will be sent email, push etc.
		  "MSG-email": false,                // Disable email notifications
		  "MSG-push": true,                  // Enable push notifications
		  "MSG-sms": true,                   // Enable sms notifications
		  "MSG-whatsapp": true,              // Enable WhatsApp notifications
		}
	   });
});

const p1v = document.querySelector('#product1viewed');

p1v.addEventListener('click', function() {
	console.log("P1 view clicked", Math.random());
	clevertap.event.push("Product Viewed", {
		"Product name":"Watch1",
		"Category":"Mens Accessories",
		"Price":59.99,
	  });
});

const p2v = document.querySelector('#product2viewed');

p2v.addEventListener('click', function() {
	console.log("P2 view clicked", Math.random());
	clevertap.event.push("Product Viewed", {
		"Product name":"Watch2",
		"Category":"Mens Accessories",
		"Price":59.99,
	  });
});

const p1p = document.querySelector('#product1purchased');

p1p.addEventListener('click', function() {
	console.log("P1 purch clicked", Math.random());
	clevertap.event.push("Product Purchased", {
		"Product name":"Watch1",
		"Category":"Mens Accessories",
		"Price":59.99,
	  });
});

const p2p = document.querySelector('#product2purchased');

p2p.addEventListener('click', function() {
	console.log("P2 purch clicked", Math.random());
	clevertap.event.push("Product Purchased", {
		"Product name":"Watch2",
		"Category":"Mens Accessories",
		"Price":59.99,
	  });
});

