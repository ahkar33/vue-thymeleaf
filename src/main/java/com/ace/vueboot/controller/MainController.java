package com.ace.vueboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String sayHello(){
        return "index";
    }

    @GetMapping("/chart")
    public String showChart(){
        return "chart";
    }

}
