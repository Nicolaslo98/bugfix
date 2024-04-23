// animate-loop-scroll
import logo from "../src/assets/hkfyg_logo.jpg";

export function ActivityBoard() {

    return (
        <>
            <div className="tw-bg-slate-700 tw-w-full tw-h-40 tw-p-20 tw-z-10">
                {/* <div className="">
                    <img src={logo} alt="Logo" />
                </div>  */}
            </div>
            <div className="tw-relative">
                <div className='tw-m-12 tw-space-y-6 tw-animate-loop-scroll'>
                    <div className="tw-bg-green-100 tw-border-t tw-border-b tw-border-green-500 tw-text-green-700 tw-px-4 tw-py-20" role="alert">
                        <p className="tw-font-bold">Informational message</p>
                        <p className="tw-text-sm">Some additional text to explain said message.</p>
                    </div>
                </div>
            </div> 
        </>
    )
}