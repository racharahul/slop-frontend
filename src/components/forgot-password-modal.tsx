import React from "react";
import api from "../util/api";
import * as yup from "yup";
import { useRouter } from "next/router";
export default function ForgotPasswordModal() {
  const [isOtpSent, setIsOtpSent] = React.useState<boolean>(false);
  const [otp, setOtp] = React.useState("");
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const onEmailSubmit = async () => {
    if (!(await yup.string().required().email().isValid(email))) {
      alert("Invalid email");
      return;
    }
    const res = await api.post(`/auth/forgot-password?emailId=${email}`);
    console.log(res.status);
    if (res.status === 200) {
      // send otp
      setIsOtpSent(true);
    } else {
      alert(res.data.message);
    }
  };
  const onOtpSubmit = async () => {
    if (!(await yup.string().min(6).required().isValid(otp))) {
      alert("Invalid otp");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const res = await api.put(`/auth/update-password?emailId=${email}`, {
      otp,
      password: newPassword,
    });
    console.log(res.status);
    if (res.status === 200) {
      alert("Password updated successfully");
    } else {
      alert(res.data.message);
    }
  };
  const OtpInput = () => {
    return (
      <div>
        <input
          className="mb-2 form-control rounded"
          type="text"
          placeholder="OTP"
          value={otp}
          maxLength={6}
          onChange={(e) => {
            const { value } = e.target;
            setOtp(value);
          }}
        />

        <input
          type="password"
          className="form-control"
          placeholder="New Password"
          onChange={(e) => {
            const { value } = e.target;
            setNewPassword(value);
          }}
        />
        <input
          type="password"
          className="form-control"
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
            onClick={async () => {
              console.log(
                `${email}, ${otp}, ${newPassword}, ${confirmPassword}`
              );
              await onOtpSubmit();
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
          {loading ? (
            <div className="d-flex justify-content-center m-5">
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="modal-body">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  defaultValue={email}
                  disabled={isOtpSent}
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
                  onClick={async () => {
                    setLoading(true);
                    await onEmailSubmit();
                    setLoading(false);
                  }}
                >
                  Send OTP
                </button>
                <div
                  className="btn btn-link"
                  onClick={() => {
                    setIsOtpSent(false);
                  }}
                >
                  Resend OTP
                </div>
                {isOtpSent ? OtpInput() : <></>}
              </div>
            </div>
          )}
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
