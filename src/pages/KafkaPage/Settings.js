import React, {useState} from 'react'

const Settings = ({}) => {
    return (
        <div style={{maxWidth: '600px'}}>
            <h4>Settings</h4>
            <p>The dynamic broker configuration option is enabled by default. The feature allows editing broker
                configurations within Control Center that do not require a restart. Any configuration option that has a
                per-broker or cluster-wide Dynamic Update Mode can be edited. Any options designated as read-only for
                the dynamic update mode requires a restart and cannot be edited dynamically.</p>
        </div>
    )
}

export default Settings