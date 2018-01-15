(function() {var implementors = {};
implementors["actix_web"] = ["impl&lt;T, A, H, U, V&gt; Handler&lt;Signal&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/server/trait.IoStream.html\" title=\"trait actix_web::server::IoStream\">IoStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"actix_web/server/trait.HttpHandler.html\" title=\"trait actix_web::server::HttpHandler\">HttpHandler</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = V&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"actix_web/server/trait.IntoHttpHandler.html\" title=\"trait actix_web::server::IntoHttpHandler\">IntoHttpHandler</a>&lt;Handler = H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,&nbsp;</span>","impl&lt;T, A, H, U, V&gt; Handler&lt;<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;Conn&lt;T&gt;&gt;&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/server/trait.IoStream.html\" title=\"trait actix_web::server::IoStream\">IoStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"actix_web/server/trait.HttpHandler.html\" title=\"trait actix_web::server::HttpHandler\">HttpHandler</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = V&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"actix_web/server/trait.IntoHttpHandler.html\" title=\"trait actix_web::server::IntoHttpHandler\">IntoHttpHandler</a>&lt;Handler = H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,&nbsp;</span>","impl&lt;T, A, H, U, V&gt; Handler&lt;<a class=\"struct\" href=\"actix_web/server/struct.PauseServer.html\" title=\"struct actix_web::server::PauseServer\">PauseServer</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/server/trait.IoStream.html\" title=\"trait actix_web::server::IoStream\">IoStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"actix_web/server/trait.HttpHandler.html\" title=\"trait actix_web::server::HttpHandler\">HttpHandler</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = V&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"actix_web/server/trait.IntoHttpHandler.html\" title=\"trait actix_web::server::IntoHttpHandler\">IntoHttpHandler</a>&lt;Handler = H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,&nbsp;</span>","impl&lt;T, A, H, U, V&gt; Handler&lt;<a class=\"struct\" href=\"actix_web/server/struct.ResumeServer.html\" title=\"struct actix_web::server::ResumeServer\">ResumeServer</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/server/trait.IoStream.html\" title=\"trait actix_web::server::IoStream\">IoStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"actix_web/server/trait.HttpHandler.html\" title=\"trait actix_web::server::HttpHandler\">HttpHandler</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = V&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"actix_web/server/trait.IntoHttpHandler.html\" title=\"trait actix_web::server::IntoHttpHandler\">IntoHttpHandler</a>&lt;Handler = H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,&nbsp;</span>","impl&lt;T, A, H, U, V&gt; Handler&lt;<a class=\"struct\" href=\"actix_web/server/struct.StopServer.html\" title=\"struct actix_web::server::StopServer\">StopServer</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/server/trait.IoStream.html\" title=\"trait actix_web::server::IoStream\">IoStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"actix_web/server/trait.HttpHandler.html\" title=\"trait actix_web::server::HttpHandler\">HttpHandler</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = V&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"actix_web/server/trait.IntoHttpHandler.html\" title=\"trait actix_web::server::IntoHttpHandler\">IntoHttpHandler</a>&lt;Handler = H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
