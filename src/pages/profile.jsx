import { Camera } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import CardSubscibe from "~/components/card-subscribe";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import { formatDate } from "~/lib/utils";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")),
  );
  const [transaction, _setTransaction] = useState(
    JSON.parse(window.localStorage.getItem("transactions")),
  );
  const [checkout, _setCheckout] = useState(
    JSON.parse(window.localStorage.getItem("checkout")),
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("user", JSON.stringify(user));

    setIsEdit(false);
  };
  const handleDeleteAccount = () => {
    window.localStorage.removeItem("user");
    navigate("/sign-in");
  };

  const expired = new Date(transaction.date).setMonth(
    new Date(transaction.date).getMonth() + 1,
  );
  return (
    <main className="container space-y-8 py-8">
      <section className="flex flex-col gap-6 md:flex-row-reverse">
        <CardSubscibe
          isPremium={user.isPremium}
          name={checkout.plan.name}
          date={formatDate(expired)}
        />
        <div className="w-full flex-1 space-y-6">
          <h1 className="font-medium text-2xl">My Profile</h1>
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            <label className="group inline-block">
              <figure className="relative size-20 overflow-hidden rounded-full border">
                <img
                  src="images/Profile.png"
                  alt=""
                  className="size-full object-cover "
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 group-hover:flex">
                  <Camera className="size-5" />
                </div>
              </figure>
              <input type="file" className="hidden" />
            </label>
            <div className="grid gap-2">
              <label htmlFor="username" className="font-medium text-sm">
                Username
              </label>
              <Input
                id="username"
                defaultValue={user.username}
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
                disabled={!isEdit}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-sm">
                Email
              </label>
              <Input
                id="email"
                type="email"
                defaultValue={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                disabled={!isEdit}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="font-medium text-sm">
                Password
              </label>
              <Input
                id="password"
                type="password"
                defaultValue={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                disabled={!isEdit}
                required
              />
            </div>
            <div className="space-y-2">
              <Button type="submit" disabled={!isEdit} className="w-full">
                Simpan
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setIsEdit(true)}
                disabled={isEdit}
              >
                Edit
              </Button>
            </div>
          </form>
        </div>
      </section>
      <div className="space-y-2">
        <h2 className="font-medium">Hapus Akun</h2>
        <Button
          variant="outline"
          onClick={handleDeleteAccount}
          className="border-red-500 bg-transparent text-red-500 transition duration-150 hover:bg-red-500 hover:text-white"
        >
          Hapus Akun
        </Button>
      </div>
    </main>
  );
}
