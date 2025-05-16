package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class shopopController {
    @GetMapping("/")
    public String getMain(){
        return "forward:/index.html";
    }
}
