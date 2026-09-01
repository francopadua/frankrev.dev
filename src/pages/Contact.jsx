import './Contact.css';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// LINKS
const links = [
    {
        key: "insta",
        name: "Instagram",
        url: "https://www.instagram.com/frankrev.dev",
        icon: new URL("../assets/Images/socials-links/insta.svg", import.meta.url).href
    },
    {
        key: "threads",
        name: "Threads",
        url: "https://www.threads.com/@frankrev.dev",
        icon: new URL("../assets/Images/socials-links/threads.svg", import.meta.url).href
    },
    {
        key: "itch",
        name: "Itch.io",
        url: "https://frankrevdev.itch.io",
        icon: new URL("../assets/Images/socials-links/itch.svg", import.meta.url).href
    },
    {
        key: "yt",
        name: "YouTube",
        url: "https://www.youtube.com/@frankrevdev",
        icon: new URL("../assets/Images/socials-links/yt.svg", import.meta.url).href
    }
];

function LinkCard({ name, src, url }) {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="linkCard"
        >
            <img src={src} alt={name} />
            <span>{name}</span>
        </a>
    );
}

function PaypalDonateButton() {
    return (
        <div>
            <style dangerouslySetInnerHTML={{__html: `
                .pp-PZXMFE9TV28EN{
                    text-align:center;
                    border:none;
                    border-radius:0.25rem;
                    min-width:11.625rem;
                    padding:0 2rem;
                    height:2.625rem;
                    font-weight:bold;
                    background-color:#FFD140;
                    color:#000000;
                    font-family:"Helvetica Neue",Arial,sans-serif;
                    font-size:1rem;
                    line-height:1.25rem;
                    cursor:pointer;
                }
            `}} />
            <form action="https://www.paypal.com/ncp/payment/PZXMFE9TV28EN" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem' }} >
                <input className="pp-PZXMFE9TV28EN" type="submit" value="DONATE" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style={{ fontSize: '0.75rem' }}>
                    Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }} />
                </section>
            </form>
        </div>
    );
}

export default function Contact() {

    // MESSAGE FORM
    const form = useRef();
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");
        emailjs.sendForm(
            "service_h4mnfze",
            "template_5rrm07t",
            form.current,
            "uQCFgeqJipqNBAK6K"
        ).then(
            () => {
                setStatus("Sent!");
                form.current.reset();
            },
            () => {
                setStatus("Error!");
            }
        );
    };

    return (
        <>
            <title>frankrevdev | contact</title>

            <div className="socialLinksContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title links-title-full">Other Links</span>
                    </div>
                </div>
                <div className="linksContent">
                    {links.map((mlink) => (
                        <LinkCard
                            key={mlink.key}
                            name={mlink.name}
                            src={mlink.icon}
                            url={mlink.url}
                        />
                    ))}
                </div>
            </div>

            <div className="messageMeContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title message-title-full">Message Me</span>
                    </div>
                </div>

                <div className="writeMessageContent">
                    <form ref={form} onSubmit={sendEmail} className="contactForm">
                        <div className="formTopContent">
                            <div className="leftInput">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="emailInput"
                                    required
                                />
                                <input 
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="subjectInput"
                                    required
                                />
                            </div>
                            <div className="rightInput">
                                <textarea 
                                    name="message"
                                    placeholder="Your Message..."
                                    required
                                />
                            </div>

                            <input 
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />
                        </div>

                        <div className="formBottomContent">
                            <button type="submit" disabled={status === "Sending..."} className="submitButton">
                                {status === "Sending..." ? "Sending..." : "Send Message"}
                            </button>
                            {status && <p className="statusResult">{status}</p>}
                        </div>
                    </form>
                </div>
            </div>

            <PaypalDonateButton />
        </>
    );
}