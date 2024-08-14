import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const TermsAndConditions = () => {
  return (
<>
<Navbar></Navbar>
<div>
      <header className="text-dark p-3 text-center">
        <h1>Terms and Conditions</h1>
      </header>

      <div className="container mt-5">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to [Your Company Name]! These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [your website URL].
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Company Name] if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section>
          <h2>Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, [Your Company Name] and/or its licensors own all the intellectual property rights and materials contained in this Website.
          </p>
          <p>
            You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>
        </section>

        <section>
          <h2>Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any Website material in any other media;</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any Website material;</li>
            <li>Publicly performing and/or showing any Website material;</li>
            <li>Using this Website in any way that is or may be damaging to this Website;</li>
            <li>Using this Website in any way that impacts user access to this Website;</li>
            <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
            <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website;</li>
            <li>Using this Website to engage in any advertising or marketing.</li>
          </ul>
          <p>Certain areas of this Website are restricted from being accessed by you and [Your Company Name] may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>
        </section>

        <section>
          <h2>Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this Website. By displaying Your Content, you grant [Your Company Name] a non-exclusive, worldwide, irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
          </p>
          <p>
            Your Content must be your own and must not be infringing on any third party’s rights. [Your Company Name] reserves the right to remove any of Your Content from this Website at any time without notice.
          </p>
        </section>

        <section>
          <h2>Your Privacy</h2>
          <p>Please read our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </section>

        <section>
          <h2>No Warranties</h2>
          <p>
            This Website is provided "as is," with all faults, and [Your Company Name] expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall [Your Company Name], nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. [Your Company Name], including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
          </p>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent [Your Company Name] from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>
        </section>

        <section>
          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>
        </section>

        <section>
          <h2>Variation of Terms</h2>
          <p>
            [Your Company Name] is permitted to revise these Terms at any time as it sees fit, and by using this Website, you are expected to review these Terms on a regular basis.
          </p>
        </section>

        <section>
          <h2>Assignment</h2>
          <p>
            The [Your Company Name] is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
          </p>
        </section>

        <section>
          <h2>Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between [Your Company Name] and you in relation to your use of this Website and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2>Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
          </p>
        </section>
      </div>

      
    </div>
<Footer></Footer>

</>
  );
};

export default TermsAndConditions;
