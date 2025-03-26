import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-4 md:grid-flow-row md:gap-4  m-4 p-4 text-start my-4">
        <div>
          <div className="flex gap-2 mt-8">
            <img
              src="./public/Zerodhalogo.jpeg"
              alt="/public/Zerodhalogo.jpeg"
              className="w-[25px] h-[25px]"
            />
            <p className="uppercase text-blue-600 font-bold text-xl">Zerodha</p>
          </div>
          <p className="my-4 text-[#343434] text-[12px]">
            © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="grid grid-cols-4 grid-flow-row gap-4 w-[fit-content]">
            <FaTwitter className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
            <FaInstagram className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
            <FaFacebook className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
            <FaYoutube className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
            <FaWhatsapp className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
            <FaLinkedin className="hover:text-blue-500 w-[fit-content] text-[#454545]" />
          </div>
        </div>
        <div className="my-8 text-[#463c3c]">
          <div className="text-2xl">Company</div>
          <div className="mx-4 my-4">
            <div className="hover:text-blue-500 w-[fit-content]">About</div>
            <div className="hover:text-blue-500 w-[fit-content]">Products</div>
            <div className="hover:text-blue-500 w-[fit-content]">Pricing</div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Referral programme
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">Careers</div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Zerodha.tech
            </div>

            <div className="hover:text-blue-500 w-[fit-content]">
              Press & media
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Zerodha Cares(CSR)
            </div>
          </div>
        </div>
        <div className="my-8 text-[#463c3c]">
          <div className="text-2xl">Company</div>
          <div className="mx-4 my-4">
            <div className="hover:text-blue-500 w-[fit-content]">
              Contact us
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Support portal
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Z-Connect blog
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              List of charges
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Downloads & resources
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">Videos</div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Market overview
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              How to file a complaint?
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Press & media
            </div>
            <div className="hover:text-blue-500 w-[fit-content]">
              Status of your complaints
            </div>
          </div>
        </div>
        <div className="my-8 text-[#463c3c]">
          <div className="text-2xl">Account</div>
          <div className="mx-4 my-4">
            <div className="hover:text-blue-500 w-[fit-content]">
              open an account
            </div>
            <div className="hover:text-blue-500 w-[fit-content] ">
              Fund Transfer
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-[5%] text-start">
          <div>
            <div className="my-4 text-[14px] text-[rgb(41,60,60)]">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </div>
          </div>
          <div className="my-4 text-[14px] text-[#2c4646]">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </div>
          <div className="my-4 text-[16px] text-[#1f5151]">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </div>
          <div className="my-4 text-[14px] text-[#2c4646]">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </div>

          <div className="my-4 text-[13px] text-[#1d4242]">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </div>
          <div>
            <div className="flex gap-x-10 flex-wrap  text-[#343433] text-[12px] my-4">
              <div className="hover:text-blue-700">NSE</div>
              <div className="hover:text-blue-700">BSE</div>
              <div className="hover:text-blue-700">MCX</div>
              <div className="hover:text-blue-700">Terms & Conditions</div>
              <div className="hover:text-blue-700">Policies & Procedures</div>
              <div className="hover:text-blue-700">Privacy Policy</div>
              <div className="hover:text-blue-700">Disclosure</div>
              <div className="hover:text-blue-700">For Investors</div>
              <div className="hover:text-blue-700">attentions</div>
              <div className="hover:text-blue-700">investors character</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
