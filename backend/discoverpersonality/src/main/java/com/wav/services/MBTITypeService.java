package com.wav.services;

import com.wav.entities.MBTIType;
import com.wav.repositories.MBTITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MBTITypeService {

    @Autowired
    private MBTITypeRepository mbtiTypeRepository;

    public MBTIType saveMBTIType(MBTIType mbtiType) {
        return mbtiTypeRepository.save(mbtiType);
    }

    public MBTIType getMBTITypeById(Long id) {
        return mbtiTypeRepository.findById(id).orElse(null);
    }

    public List<MBTIType> getAllMBTITypes() {
        return mbtiTypeRepository.findAll();
    }

    public MBTIType getMBTITypeByTypeName(String typeName) {
        return mbtiTypeRepository.findByTypeName(typeName);
    }

    
}
