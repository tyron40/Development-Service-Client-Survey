const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.submitForm = functions.https.onRequest(async (req, res) => {
  try {
    // Parse form data from the request
    const formData = req.body;

    // Check if the form data is valid (add validation logic as needed)
    if (!formData || !formData.question1 || !formData.question2) {
      return res.status(400).send("Invalid form data.");
    }

    // Get the currently authenticated user
    const user = req.user;

    // Check if the user is authenticated
    if (!user) {
      return res.status(401).send("User not authenticated.");
    }

    // Send an email using Firebase's built-in email functionality
    const email = user.email;
    const actionCodeSettings = {
      url: "https://tyrotech.dev", // Replace with your website URL
      handleCodeInApp: true,
    };

    await admin.auth().sendSignInLink(email, actionCodeSettings);

    // Respond with a success message
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server error.");
  }
});
