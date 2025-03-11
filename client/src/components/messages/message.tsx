const Message = ({message}: { message: MessageType})=>{


    const shakeClass = message.shouldShake ? "shake" : "";
    return (
        <div>
            <div>
                <div>
                    <img/>
                </div>
            </div>
            <p className={` ${shakeClass}`}></p>
            <span>

            </span>
        </div>
    );
};