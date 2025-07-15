import React, { useState } from "react";
import "./NewProjectDialog.css"

const NewProjectDialog = ({isOpen,handleSubmit,dialogRef}) => {
    const [selectedService, setSelectedservice] = useState("Semi hosted");
    const [selectedPlan, setSelectedPlan] = useState("Free");

    const handleServiceChange = (e) => {
        setSelectedservice(e.target.value);
        setSelectedPlan("Free");
    };

    const handleSelectedPlan = (event) => {
        setSelectedPlan(event.target.id);
    };

  return (
    <>
      {/* Dialog Box */}
      {isOpen && (
        <div className="NPDialog">
            <div className="ClosingInstrationBox">
                <p className="CI">click anywhere to close it</p>
            </div>
            <div ref={dialogRef} className="innerNPBox">
                <h2>Create New Project</h2>
                <p>Get secure, reliable authentication for your users. Provide your project name to get started.</p>
                {/* Form */}
                <form onSubmit={handleSubmit}>

                {/* Name Field */}
                <div className="NPInputBox">
                    <label className="text-sm mt-8 mb-4" htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="ex: my-first-project"
                    required
                    />
                </div>

                <label className="text-sm mt-8 mb-4" htmlFor="name">Select your plan</label>
                <div className="radio-inputs">
                    <label className="radio">
                        <input 
                            type="radio" 
                            name="radio" 
                            id="Semi hosted"
                            value="Semi hosted"
                            checked={selectedService === "Semi hosted"}
                            onChange={handleServiceChange}
                        />
                        <span className="name">Semi hosted</span>
                    </label>
                    <label className="radio">
                        <input 
                            type="radio" 
                            name="radio"
                            id="Fully hosted"
                            value="Fully hosted"
                            checked={selectedService === "Fully hosted"}
                            onChange={handleServiceChange}
                        />
                        <span className="name">Fully hosted</span>
                    </label>
                </div>

                {selectedService === "Semi hosted" ? (
                    <div className="SelectPlanBox">
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="Free"
                            name="Plan"
                            value="Free"
                            checked={selectedPlan === "Free"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="Free">Free</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="4$"
                            value="4$"
                            name="Plan"
                            checked={selectedPlan === "4$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="4$">4$ /month</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="9$"
                            value="9$"
                            name="Plan"
                            checked={selectedPlan === "9$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="9$">9$ /month</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="18$"
                            value="18$"
                            name="Plan"
                            checked={selectedPlan === "18$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="18$">18$ /month</label>
                        </div>
                    </div>
                ) : (
                    <div className="SelectPlanBox">
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="Free"
                            name="Plan"
                            value="Free"
                            checked={selectedPlan === "Free"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="Free">Free</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="5$"
                            value="5$"
                            name="Plan"
                            checked={selectedPlan === "5$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="5$">5$ /month</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="10$"
                            value="10$"
                            name="Plan"
                            checked={selectedPlan === "10$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="10$">10$ /month</label>
                        </div>
                        <div className="SPButton">
                            <input
                            type="radio"
                            id="20$"
                            value="20$"
                            name="Plan"
                            checked={selectedPlan === "20$"}
                            onChange={handleSelectedPlan}
                            />
                            <label htmlFor="20$">20$ /month</label>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="NPSubmitButtonParent">
                    <button
                        type="submit"
                        className="w-56 bg-red-600 text-white py-2 hover:shadow-[0px_0px_30px_rgba(255,58,58,0.5)] transition"
                        >
                        Create
                    </button>
                </div>
                </form>
            </div>
        </div>
      )}
    </>
  );
};

export default NewProjectDialog;
