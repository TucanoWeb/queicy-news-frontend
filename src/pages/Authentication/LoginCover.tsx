import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconMail from "../../components/Icon/IconMail";
import IconLockDots from "../../components/Icon/IconLockDots";

// items to update in next sprints
import useAuth from "../../hooks/useAuth/useAuth";
import { IUserRequest } from "../../types/users/userTypes";

const LoginCover = () => {
  //hooks
  const { login } = useAuth();
  const navigate = useNavigate();

  // states
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSubmit, setDataSubmit] = useState<IUserRequest>({
    email: "",
    password: ""
  });

  // functions
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataSubmit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setDataSubmit({
      email: "",
      password: ""
    });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await login(dataSubmit)
      .then(() => {})
      .catch(() => alert("Dados incorretos"))
      .finally(() => {
        resetForm();
        setLoading(false);
        navigate("/home");
      });
  };

  // start render
  return (
    <div>
      <div className="absolute inset-0">
        <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
        <img
          src="/assets/images/auth/coming-soon-object1.png"
          alt="image"
          className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"
        />
        <img
          src="/assets/images/auth/coming-soon-object2.png"
          alt="image"
          className="absolute left-24 top-0 h-40 md:left-[30%]"
        />
        <img
          src="/assets/images/auth/coming-soon-object3.png"
          alt="image"
          className="absolute right-0 top-0 h-[300px]"
        />
        <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
        <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
          <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
            <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
            <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
              <Link to="/" className="w-48 block lg:w-72 ms-10"></Link>
              <div className="mt-24 hidden w-full max-w-[430px] lg:block"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
            <div className="w-full max-w-[440px] lg:mt-16">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Login</h1>
                <p className="text-base font-bold leading-normal text-white-dark">Insira usas credenciais</p>
              </div>

              {/* Form block */}
              <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
                <div>
                  <label htmlFor="Email">Email</label>
                  <div className="relative text-white-dark">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={dataSubmit.email}
                      required={true}
                      placeholder={"Insira o email"}
                      className="form-input ps-10 placeholder:text-white-dark"
                      onChange={handleInput}
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconMail fill={true} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Password">Senha</label>
                  <div className="relative text-white-dark">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={dataSubmit.password}
                      required={true}
                      placeholder={"Insira sua senha"}
                      className="form-input ps-10 placeholder:text-white-dark"
                      onChange={handleInput}
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconLockDots fill={true} />
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                >
                  {loading && (
                    <span className="animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white shrink-0"></span>
                  )}
                  {"Login"}
                </button>
              </form>
            </div>
            <p className="absolute bottom-6 w-full text-center dark:text-white">
              © {new Date().getFullYear()}. Notícias - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCover;
