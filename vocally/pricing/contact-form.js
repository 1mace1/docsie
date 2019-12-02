var contactForm = {
    "heading": "Contact Large Sales",
    "sub_info": "Let's tallk entreprise.",
    "toggleContactFormText": "Go Back",
    "submitContactFormText": "Submit Form",
    "endPoint": "https://serverless.docsie.io/contact/MyResource",
    "disabled": true,
    "submitRes": "Successfully Submitted",
    "loadingMsg": "Sending, Please Wait...", // show this msg while getting response from API endpoitn
    "notificationDuration": 6000, // in ms
    "formInputs": [
        {
            "label": "Medium Email",
            "alias": {
                "label": "email",
                "valueType": "string"
            },
            "type": "email",
            "placeholder": "enter your Medium email"
        },
        {
            "label": "Department",
            "selectMsg": "Select Department",
            "alias": {
                "label": "department",
                "valueType": "string"
            },
            "type": "dropdown",
            "placeholder": "enter your industry",
            "options": [
                "Technology",
                "HR",
                "Legal",
                "R&D",
                "Other"
            ]
        },
        {
            "label": "Job Title",
            "alias": {
                "label": "jobTitle",
                "valueType": "string"
            },
            "type": "text",
            "placeholder": "enter your job title"
        }, {
            "label": "No. of employees",
            "alias": {
                "label": "employeesNumber",
                "valueType": "number"
            },
            "type": "number",
            "placeholder": "enter # of employees"
        },
        {
            "label": "I'm interested in...",
            "alias": {
                "label": "options",
                "valueType": "array",
                "arrayType": "options"
            },
            // type and offer_options array belong to this options type, cannot be changed
            "type": "offer_options",
            "offer_options": [
                {
                    "alias": "Priority Support and SLA's",
                    "value": "Priority Support and SLA's",
                    "type": "checkbox"
                }, {
                    "alias": "AI powered documentation",
                    "value": "AI powered documentation",
                    "type": "checkbox"
                }
            ],
            "optionsRequiredMsg": "*Please select atleast one option"
        },
        {
            "label": "Description",
            "alias": {
                "label": "description",
                "valueType": "string"
            },
            "type": "text_area",
            "placeholder": "enter your description"
        },
        {
            "label": "requiredFields",
            "alias": {
                "label": "requiredFields",
                "valueType": "array",
                "arrayType": "requiredFields"
            },
            // takes in alias.label values
            "requiredFields": [
            "email",
            "description"
            ]
        }
    ]
}
