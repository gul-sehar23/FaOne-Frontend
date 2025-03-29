

const BlogHeader = () => {
    return (
        <section className="relative bg-[#c2141b] py-16 h-[300px] text-white flex flex-col justify-between items-start px-6 md:px-10 w-full overflow-hidden">
          
          <h1 className="text-6xl md:text-6xl font-bold mb-0 mt-10">BLOG</h1>  
    
          <div className="text-lg mb-30">
            <span className="text-white font-bold">Home</span>
            <span className="mx-2 text-gray-300"> &gt; </span>
            <span className="text-gray-300 font-bold">Blog</span>
          </div>
    
          
        </section>
      );
};


export default BlogHeader;