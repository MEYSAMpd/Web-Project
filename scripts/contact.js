function initContact() {

    const contactForm = document.querySelector("#contactForm");

    if (!contactForm)
        return;

    contactForm.addEventListener("submit", handleContact);

}


async function handleContact(e) {

    e.preventDefault();

    const button = document.querySelector("#contact-btn");

    const data = {

        name: document.querySelector("#name").value.trim(),
        email: document.querySelector("#email").value.trim(),
        subject: document.querySelector("#subject").value.trim(),
        enquiryType: document.querySelector("#enquiryType").value,
        message: document.querySelector("#message").value.trim()

    };

    if (!data.name || !data.email || !data.subject || !data.message) {

        alert("Please fill in all fields.");
        return;

    }

    button.disabled = true;
    button.value = "Sending...";

    try {

        const result = await sendContact(data);

        alert(result.message || "Message sent successfully!");

        document.querySelector("#contactForm").reset();

    }
    catch (error) {

        alert(error.message || "Failed to send message.");

    }
    finally {

        button.disabled = false;
        button.value = "SUBMIT";

    }

} 
document.addEventListener("DOMContentLoaded", () => {

    initContact();

});