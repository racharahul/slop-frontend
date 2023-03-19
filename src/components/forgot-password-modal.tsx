import React from "react";
import api from "../util/api";

export default function ForgotPasswordModal() {
  const [isOtpSent, setIsOtpSent] = React.useState<boolean>(false);
  const [otp, setOtp] = React.useState("");
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const otpIds = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const onEmailSubmit = async () => {
    const res = await api.post(`/auth/forgot-password?emailId=${email}}`);
    if (res.status === 200) {
      // send otp
      setIsOtpSent(true);
    }
  };
  const OtpInput = () => {
    return (
      <div>
        <input
          type="text"
          placeholder="OTP"
          className="form-control mb-2"
          onChange={(e) => {
            const { value } = e.target;
            setOtp(value);
          }}
        />

        <input
          type="password"
          className="form-control "
          id="exampleInputPassword1"
          placeholder="New Password"
          onChange={(e) => {
            const { value } = e.target;
            setNewPassword(value);
          }}
        />
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Confirm New Password"
          onChange={(e) => {
            const { value } = e.target;
            setConfirmPassword(value);
          }}
        />
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              console.log(
                `${email}, ${otp}, ${newPassword}, ${confirmPassword}`
              );
            }}
          >
            Save Changes
          </button>
          <div />
        </div>
      </div>
    );
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <u>Reset your password</u>
              <br />
              <p className="fw-lighter">
                Tell us the registerd email address, and we will send you an
                OTP(One Time Password)
              </p>
            </h1>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmail(value);
                }}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                disabled={isOtpSent}
                onClick={onEmailSubmit}
              >
                Send OTP
              </button>
              <div className="btn btn-link" onClick={() => {}}>
                Resend OTP
              </div>
              {isOtpSent ? <OtpInput /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <input
            className="m-2 text-center form-control rounded"
            type="text"
            id="third"
            maxLength={1}
            onChange={(e) => {
                const { value } = e.target;
                setOtp((prev) => {
                  const otp = [...prev];
                  otp[0] = value;
                  return otp;
                });
              }}
          /> */
}
