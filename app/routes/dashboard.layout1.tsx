import { TemplateBlock } from "~/components/TemplateBlock";

const Layout1 = () => {
  return (
    <>
      <TemplateBlock
        code={`<div className="layout1 border flex w-full h-screen">
  <aside className="w-36 bg-primary">sidebar</aside>
  <main className="h-screen overflow-scroll flex-1">
    <header>header</header>
    <section className="p-6">
      <h4>Main content area</h4>
    </section>
  </main>
</div>`}
      >
        <div className="layout1 border flex w-full h-screen">
          <aside className="w-36 bg-primary">sidebar</aside>
          <main className="h-screen overflow-scroll flex-1 bg-yellow-50">
            <header>header</header>
            <section className="p-6 flex">
              <h4>Main content area</h4>
            </section>
          </main>
        </div>
      </TemplateBlock>
    </>
  );
};

export default Layout1;
