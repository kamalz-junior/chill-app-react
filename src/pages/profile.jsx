import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import { useSession } from "~/lib/store";
import { API_URL } from "~/service/api";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const {session} = useSession();

  console.log(API_URL)

  useEffect(() => {
    getUser(session.userId).then((result) => {
      setUser(result);
    });

    async function getUser(id) {
      try {
        const response = await fetch(`${API_URL}/users/${id}`);

        if(!response.ok){
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed fetch user: ", error);
      }
    }
    getUser(USER_ID);
  }, []);

  // Jika data belum siap, tampilkan loading
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Pastikan transaction ada sebelum mengakses date
  // const transactionDate = transaction?.date
  //   ? new Date(transaction.date)
  //   : new Date();
  // const expired = new Date(transactionDate);
  // expired.setMonth(expired.getMonth() + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if(!response.ok){
        return new Error("Response status: ", response.status);
      }
      console.log("Berhasil diubah");
    } catch (error) {
      console.error("Failed update user : ", error);
    }
  };

  const handleDeleteAccount = async () => {
    
    try {
      const response = await fetch(`${API_URL}/users/${USER_ID}`, {
        method: "DELETE",
      })

      if(!response.ok){
        return new Error("Response status: ", response.status);
      }
      
      navigate("/sign-in");
    } catch (error) {
      console.log("Failed delete user: ", error);
    }
  };

  return (
    <main className="container space-y-8 py-8">
      <section className="flex flex-col gap-6 md:flex-row-reverse">
        {/* <CardSubscibe
          isPremium={user.isPremium}
          name={checkout.plan.name}
          date={formatDate(expired)}
        /> */}
        <div className="w-full flex-1 space-y-6">
          <h1 className="font-medium text-2xl">My Profile</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="group inline-block">
              <figure className="relative size-20 overflow-hidden rounded-full border">
                <img
                  src="images/Profile.png"
                  alt="Profile"
                  className="size-full object-cover"
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
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
