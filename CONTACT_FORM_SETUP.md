# Contact Form Email Integration Setup

## Current Status
The contact form is currently set up with client-side validation and a simulated email sending function. 

## To Enable Real Email Sending (EmailJS - Free & Easy):

### Option 1: EmailJS (Recommended - Free tier available)

1. **Sign up for EmailJS:**
   - Go to https://www.emailjs.com/
   - Create a free account (allows 200 emails/month)

2. **Set up Email Service:**
   - Add an email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template:**
   - Create a new template
   - Use these template variables:
     - {{from_name}} - sender's name
     - {{from_email}} - sender's email
     - {{subject}} - email subject
     - {{message}} - email message
   - Note your Template ID

4. **Get your Public Key:**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Add EmailJS to your portfolio:**
   
   Add this script in `index.html` before the closing `</body>` tag:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script type="text/javascript">
       (function(){
           emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
       })();
   </script>
   ```

6. **Update the form handler in `assets/js/main.js`:**
   
   Replace the simulated sending section (around line 410) with:
   ```javascript
   try {
       // Send email using EmailJS
       const response = await emailjs.send(
           'YOUR_SERVICE_ID',      // Replace with your service ID
           'YOUR_TEMPLATE_ID',     // Replace with your template ID
           {
               from_name: formData.name,
               from_email: formData.email,
               subject: formData.subject,
               message: formData.message
           }
       );
       
       // SUCCESS
       showFormStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
       contactForm.reset();
       
   } catch (error) {
       // ERROR
       showFormStatus('❌ Oops! Something went wrong. Please try again or email directly.', 'error');
       console.error('EmailJS error:', error);
   }
   ```

### Option 2: Formspree (Alternative - Also Free)

1. Go to https://formspree.io/
2. Create a free account
3. Create a new form and get your form endpoint
4. Update the form action in `sections/contact.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Netlify Forms (If hosting on Netlify)

Simply add `netlify` attribute to your form:
```html
<form id="contactForm" netlify>
```

## Current Behavior (Without Setup)
- Form validates all fields
- Shows success message after 1.5 seconds
- Does NOT actually send emails
- Logs form data to browser console (for testing)

## After Setup
- Form will send real emails to your inbox
- You'll receive notifications when someone contacts you
- All validation and UI feedback remains the same
