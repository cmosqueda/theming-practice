export default function Explore() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <hr className="border-2 w-11/12 my-5"></hr>
        {/* texts */}

        <p className="txt text-5xl my-5 uppercase font-black">Typography</p>
        <div className="flex flex-col sm:flex-row w-11/12 sm:w-full justify-around my-5">
          {/* trailing texts */}
          <div className="flex flex-col">
            <p className="txt text-7xl">This is a text.</p>
            <p className="txt text-6xl">This is a text.</p>
            <p className="txt text-5xl">This is a text.</p>
            <p className="txt text-4xl">This is a text.</p>
            <p className="txt text-3xl">This is a text.</p>
            <p className="txt text-2xl">This is a text.</p>
            <p className="txt text-xl">This is a text.</p>
            <p className="txt text-lg">This is a text.</p>
            <p className="txt text-base">This is a text.</p>
            <p className="txt text-sm">This is a text.</p>
          </div>

          {/* lorem ipsums */}
          <div className="space-y-5 my-5 txt w-full sm:w-xl">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio beatae ea vitae dolore molestiae
              autem, cumque maiores et, inventore, delectus dolores nemo tempora quam dignissimos reiciendis eaque ut
              iusto!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio beatae ea vitae dolore molestiae
              autem, cumque maiores et, inventore, delectus dolores nemo tempora quam dignissimos reiciendis eaque ut
              iusto!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio beatae ea vitae dolore molestiae
              autem, cumque maiores et, inventore, delectus dolores nemo tempora quam dignissimos reiciendis eaque ut
              iusto!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio beatae ea vitae dolore molestiae
              autem, cumque maiores et, inventore, delectus dolores nemo tempora quam dignissimos reiciendis eaque ut
              iusto!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio beatae ea vitae dolore molestiae
              autem, cumque maiores et, inventore, delectus dolores nemo tempora quam dignissimos reiciendis eaque ut
              iusto!
            </p>
          </div>
        </div>

        {/* DARK cards */}
        <div className="my-5 boxopposite w-11/12 rounded-4xl">
          <p className="text-5xl my-10 uppercase font-black text-center">Cards - Theme Default</p>

          {/* CARD CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-10">
            <div className="card">
              <div className="boxopposite h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="card">
              <div className="boxopposite h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
              <p className="text-sm">
                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent.
              </p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="card">
              <div className="boxopposite h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
              <p className="text-sm">Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="card">
              <div className="boxopposite h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 4</h2>
              <p className="text-sm">Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>
          </div>
        </div>

        {/* LIGHT cards */}
        <div className="my-5 box w-11/12 rounded-4xl">
          <p className="text-5xl my-10 uppercase font-black text-center">Cards - Theme Opposite</p>

          {/* CARD CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-10">
            <div className="cardopposite">
              <div className="box h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="cardopposite">
              <div className="box h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
              <p className="text-sm">
                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent.
              </p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="cardopposite">
              <div className="box h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
              <p className="text-sm">Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>

            <div className="cardopposite">
              <div className="box h-30 rounded-lg my-2"></div>
              <h2 className="text-xl font-semibold mb-2">Card Title 4</h2>
              <p className="text-sm">Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
              <button className="btn w-full mt-3">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
