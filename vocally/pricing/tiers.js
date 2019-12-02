tiers = {
  "Banner": "All features including the most advanced are forever free for open source projects and non-profits, please contact us with your project details",
  "show_radio_options": false,
  "radio_btn_monthly_opt": "Pay monthly",
  "radio_btn_yearly_opt": "Pay yearly (Save up to 30%)",
  "monthlyText": "when you pay yearly",
  "yearlyText": "billed yearly, Save",
  "compareText": "compare plans",
  // "toggleText": "Back to simple plans",
  "tiers": [
    {
      "name": "Large",
      "order": 1,
      "icon": "www.docsie.io/icon.png",
      "description": "Unlimited Feedback Submissions",
      "call_to_action": {
        // use type to make contact page as call to action on click of this
        "type": "contact",
        "text": "Talk to Us",
        "url": "#"
      },
      "popular": "False",
      "popularInfoText": "Most Popular",
      // use the following for showing contact page
      "showCallToAction": "True"
    },
    {
      "pricing": {
        "monthly": {
          "price": "399.00",
          "currency": "$",
          "label": "/month"
        },
        "yearly": {
          "price": "329.00",
          "currency": "$",
          "perAnnum": "3900",
          "savedAmount": "24",
          "label": "/month"
        }
      },
      "name": "Medium",
      "icon": "www.docsie.io/icon.png",
      "order": 2,
      "description": "Up to 50,000 feedback submissions per month.",
      "call_to_action": {
        "type": "pricing",
        "text": "Try it Free!",
        "url": "https://app.docsie.io/manager/?utm=Medium"
      },
      "showCallToAction": "False"
    },
    {
      "pricing": {
        "monthly": {
          "price": "69.99",
          "currency": "$",
          "label": "/month"
        },
        "yearly": {
          "price": "49.99",
          "currency": "$",
          "perAnnum": "599",
          "savedAmount": "20",
          "label": "/month"
        }
      },
         "name": "Small",
         "icon" : "www.docsie.io/icon.png",
         "order": 4,
         "description": "Up to 5000 feedbacks submited per month.",
         "call_to_action" : {
            // use type to
            "type": "pricing",
            "text":"Sign-up Free!",
            "url": "https://app.docsie.io/manager/?utm=Small"
          },
          "showCallToAction": "False"
      }
  ]
}