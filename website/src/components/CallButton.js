import React from "react";
import { IoMdCall } from "react-icons/io";

function CallButton() {
    const phoneNumber = "06 26 91 49 66"; // numéro de téléphone à appeler

    function handleClick() {
        if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
            // si l'utilisateur est sur mobile, ouvre l'application téléphone avec le numéro prédéfini
            window.location.href = `tel:${phoneNumber}`;
        } else {
            // si l'utilisateur est sur ordinateur, copie le numéro dans le presse-papiers
            navigator.clipboard.writeText(phoneNumber);
            alert(`Le numéro ${phoneNumber} a été copié dans le presse-papiers.`);
        }
    }

    return (
        <>
            <div
                onClick={handleClick}
                style={{
                    cursor: "pointer"
                }}
            >
                <IoMdCall className='d-inline animSocialNetworkLogo' size='5em' color='#848c7c' />
            </div>
        </>
    );
}

export default CallButton;
