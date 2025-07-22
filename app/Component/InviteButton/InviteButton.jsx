'use client';
import React from 'react'
import ToolTip from '../ToolTip/ToolTip';
import { useToast } from "@/app/context/ToastContext";

function InviteButton() {
    const { showToast } = useToast();

    function CopyLink(){
        showToast("Link copied, share it with your Dev friends", "info");
    }

    return (
        <ToolTip content="Invite your developer friends" position="left">
            <button onClick={CopyLink} className='bg-transparent border border-neutral-600 px-4 py-1 text-sm rounded-sm cursor-pointer'>Invite friends</button>
        </ToolTip>
    )
}

export default InviteButton;