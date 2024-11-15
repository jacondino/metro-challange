import { ExtraContent } from "@/components/ExtraContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeButton } from "@/components/HomeButton";
import { MainContent } from "@/components/MainContent";
import { RelatedImages } from "@/components/RelatedImages";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Sidebar } from "@/components/Sidebar";

export default function Three() {
  return (
    <div className="flex flex-col h-screen">
      <HomeButton />
      <Header />
      <div className="flex flex-1">
        <div className="flex flex-col w-1/3">
          <Hero />
          <Sidebar />
        </div>
        <div className="flex flex-col w-2/3">
          <MainContent />
          <ExtraContent />
        </div>
      </div>
      <div className="flex">
        <RelatedImages />
        <RelatedPosts />
      </div>
      <Footer />
    </div>
  );
}
