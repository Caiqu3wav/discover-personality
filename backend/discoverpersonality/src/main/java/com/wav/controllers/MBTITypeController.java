package com.wav.controllers;

import com.wav.entities.MBTIType;
import com.wav.services.MBTITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mbti-types")
public class MBTITypeController {

    @Autowired
    private MBTITypeService mbtiTypeService;

    @PostMapping
    public MBTIType createMBTIType(@RequestBody MBTIType mbtiType) {
        return mbtiTypeService.saveMBTIType(mbtiType);
    }

    @GetMapping("/{id}")
    public MBTIType getMBTITypeById(@PathVariable Long id) {
        return mbtiTypeService.getMBTITypeById(id);
    }

    @GetMapping
    public List<MBTIType> getAllMBTITypes() {
        return mbtiTypeService.getAllMBTITypes();
    }

    @GetMapping("/typename/{typeName}")
    public MBTIType getMBTITypeByTypeName(@PathVariable String typeName) {
        return mbtiTypeService.getMBTITypeByTypeName(typeName);
    }
}