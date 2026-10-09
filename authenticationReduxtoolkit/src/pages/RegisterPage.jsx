import { Link } from "react-router";
import { useAuth } from "../hooks/AuthHook";

const Brand = ({ mobile = false }) => (
    <div
        className={`inline-flex w-max items-center gap-2.5 font-display text-[21px] font-extrabold tracking-[-0.7px] ${mobile ? "mb-[60px] min-[421px]:mb-[45px]" : ""
            }`}
    >
        <span className="grid size-7 place-items-center rounded-[9px] bg-[#bce4d7] text-[20px] italic leading-none text-[#174552]">
            a
        </span>
        <span>atlas</span>
    </div>
);

const RegisterPage = () => {
    const { registerFrom, register, handleSubmit, errors } = useAuth();
    return (
        <main className="grid min-h-screen bg-[#f5f7fa] min-[761px]:grid-cols-[minmax(360px,0.95fr)_minmax(460px,1.05fr)]">
            <section
                className="relative hidden min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_80%_24%,rgba(68,119,151,0.28),transparent_28%),linear-gradient(145deg,#102d3d_0%,#173f50_52%,#1e5362_100%)] px-[clamp(36px,6vw,92px)] py-[42px] text-[#f6f8fb] min-[761px]:flex after:absolute after:-right-[120px] after:-bottom-[140px] after:size-[440px] after:rounded-full after:border after:border-[rgba(215,237,233,0.18)] after:shadow-[0_0_0_45px_rgba(215,237,233,0.035),0_0_0_90px_rgba(215,237,233,0.025)] after:content-['']"
                aria-label="Product introduction"
            >
                <Brand />
                <div className="z-10 my-auto max-w-[440px] pb-8">
                    <p className="mb-[17px] text-[11px] font-bold uppercase tracking-[1.8px] text-[#a8d9d0]">
                        Start something meaningful
                    </p>
                    <h1 className="max-w-[400px] font-display text-[clamp(38px,4.3vw,61px)] font-extrabold leading-[1.07] tracking-[-3px]">
                        Make space for better work.
                    </h1>
                    <p className="mt-[27px] max-w-[355px] text-[15px] leading-[1.75] text-[#b9d0d5]">
                        Join a thoughtful workspace built to help your team move from
                        scattered ideas to shared momentum.
                    </p>
                </div>
                <div className="z-10 flex items-center gap-[13px] text-xs text-[#9fbdc2]">
                    <span className="h-px w-7 bg-[#77b8af]" />
                    <p>Simple tools for ambitious ideas</p>
                </div>
            </section>

            <section className="grid min-h-screen place-items-center px-5 py-[34px] min-[421px]:px-7 min-[761px]:px-7 min-[761px]:py-10">
                <div className="w-full max-w-[414px]">
                    <div className="min-[761px]:hidden">
                        <Brand mobile />
                    </div>

                    <div className="mb-[27px]">
                        <p className="mb-[17px] text-[11px] font-bold uppercase tracking-[1.8px] text-[#3c9d91]">
                            Create your account
                        </p>
                        <h2 className="mb-[11px] font-display text-[26px] font-bold leading-[1.2] tracking-[-1.3px] text-[#172a3b] min-[421px]:text-[29px]">
                            Build something great
                        </h2>
                        <p className="text-sm leading-[1.6] text-[#71808c]">
                            Set up your free account and bring your next idea to life.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(registerFrom)} className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#334657]" htmlFor="name">
                            Full name
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="mb-2 h-12 w-full rounded-lg border border-[#d7dfe4] bg-white px-[15px] text-sm text-[#203548] outline-none transition placeholder:text-[#a3afb7] focus:border-[#4d9b91] focus:ring-4 focus:ring-[rgba(77,155,145,0.13)]"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        <label className="text-[13px] font-semibold text-[#334657]" htmlFor="email">
                            Email address
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            className="mb-2 h-12 w-full rounded-lg border border-[#d7dfe4] bg-white px-[15px] text-sm text-[#203548] outline-none transition placeholder:text-[#a3afb7] focus:border-[#4d9b91] focus:ring-4 focus:ring-[rgba(77,155,145,0.13)]"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <label className="text-[13px] font-semibold text-[#334657]" htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            className="mb-2 h-12 w-full rounded-lg border border-[#d7dfe4] bg-white px-[15px] text-sm text-[#203548] outline-none transition placeholder:text-[#a3afb7] focus:border-[#4d9b91] focus:ring-4 focus:ring-[rgba(77,155,145,0.13)]"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            autoComplete="new-password"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <label className="mb-[11px] mt-1 flex items-start gap-[9px] text-xs leading-[1.5] text-[#7d8992]">
                            <input className="mt-0.5 size-[15px] shrink-0 accent-[#3f9188]" type="checkbox" required />
                            <span>
                                I agree to the <a className="font-bold text-[#388d83] hover:underline" href="#terms">Terms of Service</a>{" "}
                                and <a className="font-bold text-[#388d83] hover:underline" href="#privacy">Privacy Policy</a>.
                            </span>
                        </label>

                        <button
                            className="flex h-12 items-center justify-between rounded-lg border-0 bg-[#1b5962] px-[17px] pl-5 text-sm font-bold text-white shadow-[0_7px_17px_rgba(27,89,98,0.17)] transition hover:-translate-y-px hover:bg-[#154b53] hover:shadow-[0_9px_20px_rgba(27,89,98,0.24)]"
                            type="submit"
                        >
                            Create account
                            <span className="text-[22px] font-normal leading-none" aria-hidden="true">→</span>
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-[13px] text-[11px] text-[#a2adb3] before:h-px before:flex-1 before:bg-[#e1e6e9] after:h-px after:flex-1 after:bg-[#e1e6e9]">
                        <span>or sign up with</span>
                    </div>

                    <button
                        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-[#d7dfe4] bg-white text-sm font-bold text-[#415261] transition hover:-translate-y-px hover:bg-[#fafcfc]"
                        type="button"
                    >
                        <span className="grid size-[19px] place-items-center rounded-full border border-[#e0e6e9] font-sans text-xs text-[#4285f4]" aria-hidden="true">
                            G
                        </span>
                        Sign up with Google
                    </button>

                    <p className="mt-[29px] text-center text-[13px] text-[#87929a]">
                        Already have an account?{" "}
                        <Link className="text-xs font-bold text-[#388d83] hover:underline" to="/">
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default RegisterPage;
